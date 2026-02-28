const games = [
  {
    name: "Minecraft",
    description: "Server hosting with mods for friends",
    icon: "⛏️",
  },
  {
    name: "Ark: Survival Evolved",
    description: "Custom ini configurations",
    icon: "🦖",
  },
  {
    name: "Balatro",
    description: "Found a god seed, mod conflicts though 😅",
    icon: "🃏",
  },
  {
    name: "Valorant",
    description: "Sensitivity calculations for crosshair consistency",
    icon: "🎯",
  },
];

const otherFun = [
  {
    category: "🎰",
    items: [
      { name: "Texas Poker", desc: "Studying with GTO Wizard" },
      { name: "CS Skins Trading", desc: "Investment and trading" },
    ],
  },
  {
    category: "⚙️",
    items: [
      { name: "PC Building", desc: "Custom builds and upgrades" },
      { name: "Linux Ricing", desc: "Dotfiles and customization" },
    ],
  },
  {
    category: "🏂",
    items: [
      { name: "Snowboarding", desc: "Love hitting the slopes" },
      { name: "Gym", desc: "Staying fit" },
    ],
  },
];

export default function Fun() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Fun Stuff</h1>
      <p className="text-gray-500 mb-12">Things I do for fun (not all productive 😅)</p>

      {/* Games */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">🎮 Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {games.map((game) => (
            <div
              key={game.name}
              className="bg-white/5 rounded-xl p-6 border border-white/10 card-hover"
            >
              <span className="text-3xl">{game.icon}</span>
              <h3 className="text-lg font-bold mt-2">{game.name}</h3>
              <p className="text-gray-400 text-sm">{game.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* More Fun */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">🎲 Other Hobbies</h2>
        <div className="space-y-6">
          {otherFun.map((category) => (
            <div key={category.category} className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <span className="text-white">{item.name}</span>
                    <span className="text-gray-500 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Random Quote */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-xl p-8 border border-white/10">
          <p className="text-xl italic text-gray-300">
            &quot;Infinites! Keep Spinning!&quot;
          </p>
          <p className="text-gray-500 mt-2">— Beijing Infinites Team Slogan</p>
        </div>
      </div>
    </div>
  );
}
