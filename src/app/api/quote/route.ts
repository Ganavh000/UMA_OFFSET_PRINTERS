import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would send an email here using a service like Resend or SendGrid
    // and potentially save the inquiry to a database.
    console.log('New Quote Inquiry:', body);

    return NextResponse.json({ 
      success: true, 
      message: 'Your project brief has been received. Our experts will contact you within 24 hours.' 
    });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { success: false, message: 'There was an error processing your request. Please try again later.' },
      { status: 500 }
    );
  }
}
