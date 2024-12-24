export default function ContactForm() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-green-600 mb-6">Waiting to hear from you!</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="p-2 border rounded-md"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="p-2 border rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-2 border rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-2 border rounded-md"
            required
          />
        </div>
        <textarea
          placeholder="Type your message here..."
          className="w-full p-2 border rounded-md h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}