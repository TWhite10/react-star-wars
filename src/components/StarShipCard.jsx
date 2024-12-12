import React from "react"

export default function StarshipCard({ starship }) {
    return (
        <div style={{
            backgroundColor: "navy",
            color: "white",
            padding: "20px",
            margin: "5px",
            borderRadius: '5px',
            textAlign: 'center'
        }} >
            <h1>{starship.name}</h1>
        </div>
    );
}