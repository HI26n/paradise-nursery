import './AboutUs.css';

// Company blurb shown on the landing page. Kept as its own component so the
// "about the company" copy is easy to find and edit independently of the
// rest of the landing page layout in App.jsx.
export default function AboutUs() {
  return (
    <section className="nn-about" aria-label="About Paradise Nursery">
      <p className="nn-about-text">
        Paradise Nursery started as a single potting bench in a spare room and grew, one
        cutting at a time, into a small team obsessed with matching people to plants they'll
        actually keep alive. We hand-pick every succulent, air-purifier, and bloomer in our
        catalogue, pot it ourselves, and ship it ready to sit on your windowsill from day one.
        No jargon, no guesswork — just healthy plants and the care notes to match.
      </p>
    </section>
  );
}
