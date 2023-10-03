import "./App.css";
import Card from "./component/Card";

function App() {
  return (
    <div className="hero">
      <Card
        src="../public/memati.jpg"
        name="Memati"
        description="Süleyman Çakır'ın sağ kolu ve en sadık adamıydı. Çakır'a abi diye hitap ederdi. Çakır, hapishanede Memati'ye bulaşanları savuşturmuş ve Memati'yi yanına almıştır. Memati, Çakır'a hep sadık kalmıştır."
      />
      <Card
        src="../public/polat.jpg"
        name="Polat Alemdar"
        description="Polat Alemdar Aslan Akbey tarafından yetiştirilen, lise yıllarından itibaren devlet adına çalışmaya yemin etmiş üst düzey bir devlet görevlisidir. Mehmet Karahanlı ile Nergis Karahanlı'nın öz oğludur. Küçükken Aslan Akbey tarafından kaçırılmış ve Ömer Candan ile Nazife Candan'ın yanına evlatlık olarak verilmiştir."
      />
      <Card
        src="../public/abdulhey.jpg"
        name="Abdülhey"
        description="İstihbarattaki kod adı Akrep'tir. KGT'nin iki numarasıdır. Elazığlıdır. Çocukluktan devlet tarafından yetiştirilmiş ve Kuzey Irak'taki Omar Aşireti'nin içine yerleştirilmiştir."
      />
    </div>
  );
}

export default App;
