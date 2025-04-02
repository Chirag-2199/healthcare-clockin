// components/CareworkerView.tsx
import { useState } from 'react';

export default function CareworkerView() {
    const [note, setNote] = useState('');

    const handleClockIn = async () => {
        const res = await fetch('/api/graphql', {
            method: 'POST',
            body: JSON.stringify({ note, action: 'clockIn' }),
        });
        console.log(await res.json());
    };

    const handleClockOut = async () => {
        const res = await fetch('/api/graphql', {
            method: 'POST',
            body: JSON.stringify({ note, action: 'clockOut' }),
        });
        console.log(await res.json());
    };

    return (
        <div>
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Optional note"
            />
            <button onClick={handleClockIn}>Clock In</button>
            <button onClick={handleClockOut}>Clock Out</button>
        </div>
    );
}
