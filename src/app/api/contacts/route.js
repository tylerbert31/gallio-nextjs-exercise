import Contacts from "@/lib/models/contacts_model";

// Get All Contacts
export async function GET() {
  try {
    const contacts = await Contacts.findAll();
    return Response.json(
      { message: "success", status: 200, data: contacts },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error, status: 500 }, { status: 500 });
  }
}

export async function POST(request) {
  const data = await request.json();

  try {
    await Contacts.save(data);
    return Response.json({ message: "success", status: 200 }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error, status: 500 }, { status: 500 });
  }
}

export async function PUT(request) {
  const data = await request.json();
  try {
    await Contacts.update(data.id, data);
    return Response.json({ message: "success", status: 200 }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error, status: 500 }, { status: 500 });
  }
}

export async function DELETE(request) {
  const data = await request.json();
  try {
    await Contacts.delete(data.id);
    return Response.json({ message: "success", status: 200 }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error, status: 500 }, { status: 500 });
  }
}
