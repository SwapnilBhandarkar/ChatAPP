import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import "../styles/HomePage.scss";

const HomePage = () => {
    const { user, authTokens } = useContext(AuthContext);
    const navigateTo = useNavigate();
    const { logoutUser } = useContext(AuthContext);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // Fetch the list of rooms when the component loads
        const fetchRooms = async () => {
            try {
                let response = await fetch("http://localhost:8000/rooms/", {
                    method: 'GET',
                    headers: {
                        "Authorization": `Bearer ${authTokens.access}`
                    }
                });
                if (response.status === 200) {
                    let data = await response.json();
                    setRooms(data);  // Update the state with the fetched rooms
                } else {
                    alert("Failed to fetch rooms");
                }
            } catch (error) {
                console.error("Error fetching rooms:", error);
            }
        };

        fetchRooms();
    }, [authTokens]);  // Only run when authTokens change

    const enterRoom = (e) => {
        e.preventDefault();
        navigateTo(`/${e.target.room.value}/${e.target.enterPassword.value}`);
    };

    const CreateRoom = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:8000/room/`, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${authTokens.access}`
            },
            body: JSON.stringify({ 'name': e.target.name.value, 'password': e.target.password.value })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                navigateTo(`/${e.target.name.value}/${e.target.password.value}`);
            } else {
                alert("This room already exists");
            }
        });
    };
    const deleteRoom = async (roomId) => {
        try {
            const response = await fetch(`http://localhost:8000/room/${roomId}/`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`
                }
            });
    
            if (response.status === 204) {
                // Successfully deleted, remove the room from the state
                setRooms(rooms.filter(room => room.id !== roomId));
            } else {
                alert('Failed to delete the room');
            }
        } catch (error) {
            console.error('Error deleting the room:', error);
        }
    };
    

    return (
        <div id='enterRoom'>
            <button id='logout' onClick={logoutUser}>Logout</button>
            <form onSubmit={enterRoom}>
                <label htmlFor="room">Enter the room's name</label>
                <input type="text" name="room" placeholder='Room name...' />
                <input type="password" name="enterPassword" placeholder='Room Password...' />
                <button type="submit">Enter</button>
            </form>

            <form onSubmit={CreateRoom}>
                <h3>or <br /> Create room</h3>
                <label htmlFor="name">Enter the room's name</label>
                <input type="text" name="name" placeholder='Room Name...' />
                <input type="password" name="password" placeholder='Room Password...' />
                <button type="submit">Create</button>
            </form>

            {/* Display the list of rooms */}
            <div className='available-rooms-container'>
                <h3 className='rooms-header'>Available Rooms</h3>
                {rooms.length > 0 ? (
                    <div className='room-list'>
                        {rooms.map(room => (
                            <div key={room.id} className='room-card'>
                                <h4>{room.name}</h4>
                                <p>Room ID: {room.id}</p>
                                <button 
                                    className='delete-room-btn'
                                    onClick={() => deleteRoom(room.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className='no-rooms'>No rooms available</p>
                )}
            </div>


        </div>
    );
};

export default HomePage;
