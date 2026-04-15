function Header({ totalPendientes }) {
  return (
    <header style={{
      backgroundColor: "#1a1a2e",
      color: "white",
      padding: "16px 24px",
      position: "relative",
      textAlign: "center",
    }}>
      <h1 style={{ margin: 0, fontSize: "1.4rem" }}>
        TaskUPC — Mi Gestor Académico
      </h1>
      <span style={{
        backgroundColor: "#e94560",
        borderRadius: "20px",
        padding: "4px 14px",
        fontSize: "0.9rem",
        position: "absolute",
        right: "24px",
        top: "50%",
        transform: "translateY(-50%)",
      }}>
        {totalPendientes} pendiente{totalPendientes !== 1 ? "s" : ""}
      </span>
    </header>
  );
}

export default Header;