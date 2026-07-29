import jsPDF from "jspdf";

export default function downloadPassport(data){

    const pdf = new jsPDF();

    pdf.setFontSize(22);

    pdf.text("SwarajyaAI Passport",20,20);

    pdf.setFontSize(12);

    pdf.text(`Passport ID: ${data.passportId}`,20,40);

    pdf.text(`Model: ${data.modelName}`,20,50);

    pdf.text(`Organization: ${data.organization}`,20,60);

    pdf.text(`Trust Score: ${data.trustScore}`,20,70);

    pdf.save("AI-Passport.pdf");

}