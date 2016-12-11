import React from 'react';

export default function HistoryComponent(props) {
    return (
        <div>
            <h1>History</h1>
            <pre>{JSON.stringify(props)}</pre>
        </div>
    );
}
