export default function PassportFooter({ model }) {
  return (
    <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">

      <div>
        <p className="text-slate-400 text-sm">
          Passport ID
        </p>

        <h3 className="font-bold">
          {model.passportId}
        </h3>
      </div>

      <div className="text-center">
        <img
          src={`${import.meta.env.VITE_API}/generated/qr/${model.passportId}.png`}
          alt="Passport QR"
          className="w-40 rounded-xl bg-white p-3 mx-auto"
        />

        <p className="text-slate-400 mt-3">
          Scan to Verify Passport
        </p>
      </div>

      <button
        onClick={() =>
          window.open(
            `${import.meta.env.VITE_API}/passport/${model.passportId}`,
            "_blank"
          )
        }
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
      >
        Download Passport PDF
      </button>

    </div>
  );
}