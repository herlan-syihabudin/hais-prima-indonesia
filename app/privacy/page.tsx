// app/privacy/page.tsx
import Container from "@/components/ui/Container";

export default function PrivacyPage() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Kebijakan Privasi</h1>
        <p className="text-gray-500 mb-8">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
        
        <div className="prose prose-slate max-w-none">
          <p className="lead">PT Hais Prima Indonesia ("Kami", "Kami", "Milik Kami") berkomitmen untuk melindungi privasi Anda.</p>

          <h2>1. Informasi yang Kami Kumpulkan</h2>
          <p>Kami dapat mengumpulkan informasi pribadi seperti nama, alamat email, dan nomor telepon saat Anda mengisi formulir kontak atau meminta penawaran.</p>

          <h2>2. Penggunaan Informasi</h2>
          <p>Informasi yang kami kumpulkan digunakan untuk memproses pertanyaan Anda, mengirimkan informasi yang Anda minta, dan meningkatkan layanan kami.</p>

          <h2>3. Keamanan Data</h2>
          <p>Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda dari akses, pengubahan, atau pengungkapan yang tidak sah.</p>

          <h2>4. Perubahan Kebijakan Privasi</h2>
          <p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan diumumkan di halaman ini.</p>

          <h2>5. Hubungi Kami</h2>
          <p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di <strong>info@haisindonesia.com</strong> atau melalui telepon di <strong>0811-8880-1198</strong>.</p>
        </div>
      </div>
    </Container>
  );
}
