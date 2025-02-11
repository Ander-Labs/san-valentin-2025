import "../../styles/global.css";

export default function FloatingHearts() {
  const hearts = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: Math.random() * 100, // Posición horizontal en porcentaje
    delay: Math.random() * 5, // Retardo de inicio de la animación
    duration: 5 + Math.random() * 5, // Duración de la animación (entre 5 y 10 s)
    size: 20 + Math.random() * 30, // Tamaño de la fuente (en píxeles)
  }));
  return (
    <>
      <div className="relative w-full min-h-screen bg-pink-200 overflow-hidden">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-red-500"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animation: `float ${heart.duration}s linear ${heart.delay}s infinite`,
            }}
          >
            ♥
          </div>
        ))}
      </div>
    </>
  );
}
