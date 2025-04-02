import { NextRequest, NextResponse } from 'next/server';

// ✅ Define a type for clock records
type ClockRecord = {
    userId: string;
    action: string;
    timestamp: string;
};

// ✅ Initialize `clockRecords` properly
const clockRecords: ClockRecord[] = [];

export async function POST(req: NextRequest) {
    try {
        const { userId } = await req.json();
        console.log(`Clock In Request Received for userId: ${userId}`);

        const timestamp = new Date().toISOString();
        clockRecords.push({ userId, action: 'Clocked In', timestamp });

        return NextResponse.json({ message: 'Clock-in successful' }, { status: 200 });
    } catch (error) {
        console.error('Error during Clock-in:', error);
        return NextResponse.json({ error: 'Failed to Clock-in' }, { status: 500 });
    }
}

// API to fetch clock records
export async function GET() {
    return NextResponse.json(clockRecords);
}
