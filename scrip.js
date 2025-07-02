function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const usuarios = [
    { usuario: "admin", contraseña: "admin123", tipo: "admin" },
    { usuario: "usuario", contraseña: "usuario123", tipo: "usuario" }
  ];

  const encontrado = usuarios.find(u => u.usuario === username && u.contraseña === password);

  if (encontrado) {
    if (encontrado.tipo === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "user.html";
    }
  } else {
    const error = document.getElementById("error");
    if (error) {
      error.textContent = "Usuario o contraseña incorrectos.";
    }
  }
}
