import { useState } from "react";
import { cards } from "../data/cards.js";

const fmt = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export default function Cards() {
  const [sortBy, setSortBy] = useState("dateAcquired");

  const totalSpent = cards.reduce((sum, c) => sum + c.pricePaid, 0);
  const totalMarket = cards.reduce((sum, c) => sum + c.marketPrice, 0);
  const gain = totalMarket - totalSpent;

  const sorted = [...cards].sort((a, b) => {
    if (sortBy === "dateAcquired")
      return new Date(b.dateAcquired) - new Date(a.dateAcquired);
    if (sortBy === "marketPrice") return b.marketPrice - a.marketPrice;
    if (sortBy === "pricePaid") return b.pricePaid - a.pricePaid;
    return a.name.localeCompare(b.name);
  });

  return (
    <main className="cards-page">
      {/* ── TOTAL SPENT BANNER ── */}
      <header className="cards-hero">
        <p className="cards-hero-label">total invested in cardboard</p>
        <h1 className="cards-hero-total">{fmt(totalSpent)}</h1>
        <div className="cards-hero-stats">
          <div className="mini-stat">
            <span className="mini-stat-label">collection value</span>
            <span className="mini-stat-value">{fmt(totalMarket)}</span>
          </div>
          <div className="mini-stat">
            <span className="mini-stat-label">
              {gain >= 0 ? "unrealized gain" : "unrealized loss"}
            </span>
            <span
              className={`mini-stat-value ${gain >= 0 ? "gain" : "loss"}`}
            >
              {gain >= 0 ? "+" : ""}{fmt(gain)}
            </span>
          </div>
          <div className="mini-stat">
            <span className="mini-stat-label">cards owned</span>
            <span className="mini-stat-value">{cards.length}</span>
          </div>
        </div>
      </header>

      {/* ── COLLECTION ── */}
      <section className="section">
        <div className="cards-toolbar">
          <h2 className="section-title"># the_collection</h2>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="dateAcquired">newest first</option>
            <option value="marketPrice">highest value</option>
            <option value="pricePaid">most paid</option>
            <option value="name">a → z</option>
          </select>
        </div>

        <div className="card-grid">
          {sorted.map((c, i) => (
            <div className={`pkmn-card ${c.favorite ? "fav" : ""}`} key={i}>
              {c.favorite && <span className="fav-badge">★ favorite</span>}

              <div className="pkmn-card-img">
                {c.image ? (
                  <img src={c.image} alt={c.name} />
                ) : (
                  <span className="img-placeholder">🃏</span>
                )}
              </div>

              <div className="pkmn-card-body">
                <h3 className="pkmn-card-name">{c.name}</h3>
                <p className="pkmn-card-set">
                  {c.set} · {c.number}
                </p>

                <div className="pkmn-card-prices">
                  <div className="price-block">
                    <span className="price-label">paid</span>
                    <span className="price-value">{fmt(c.pricePaid)}</span>
                  </div>
                  <div className="price-block">
                    <span className="price-label">market</span>
                    <span
                      className={`price-value ${
                        c.marketPrice >= c.pricePaid ? "gain" : "loss"
                      }`}
                    >
                      {fmt(c.marketPrice)}
                    </span>
                  </div>
                </div>

                <div className="pkmn-card-meta">
                  <span>{c.condition}</span>
                  <span>{c.dateAcquired}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </section>
    </main>
  );
}
