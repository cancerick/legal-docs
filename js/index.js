// Script para mejorar la experiencia
document.addEventListener("DOMContentLoaded", function () {
    // Suavizar scroll al hacer clic en enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#top") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    });

    // Mostrar mensaje de carga completada
    window.addEventListener("load", function () {
        console.log("Política de Privacidad Hatchco cargada correctamente");
    });
});
