interface ICars {
  id: number;
}

function Cars({id}: ICars) {
  return (
    <div>
      <h1>Cars {id}</h1>
      <p>Parágrafo</p>
      <p>Details of Car</p>
    </div>
  );
}

export default Cars;
