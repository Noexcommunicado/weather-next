import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Добро пожаловать на главную страницу</h1>
      <p>Перейдите на страницу погоды, чтобы узнать текущие погодные условия.</p>
      
      <Link
        href="/weather"
        style={{
          display: "inline-block",
          padding: "20px 20px",
          backgroundColor: "#4caf50",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#4caf50")}
      >
        Перейти на страницу погоды
      </Link>
    </div>
  );
}
