const GridCard = ({ character, src }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={src} alt={character} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>{character}</div>
      </div>
    </div>
  );
};

export default GridCard;
