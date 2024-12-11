export default function Option({sid, name_group}) {
    return (
      <>
        <option value={sid}>
          {name_group}
        </option>
      </>
    );
}