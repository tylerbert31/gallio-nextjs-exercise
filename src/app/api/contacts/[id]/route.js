import Contacts from "@/lib/models/contacts_model";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const contact = await Contacts.findById(id);
    return Response.json(
      { message: "success", status: 200, data: contact },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: error, status: 500 }, { status: 500 });
  }
}
