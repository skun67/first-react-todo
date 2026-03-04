import "../styles/info.css";

export default function InfoContainer({ doneNumber }) {
  return (
    <div className="infoWrapper">
      <p className="infoP">
        Completed today: <span>{doneNumber}</span>
      </p>
    </div>
  );
}
