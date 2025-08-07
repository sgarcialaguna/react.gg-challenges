import type { FormEvent } from "react";

export default function Form({ addItem }: { addItem: (item: string) => void }) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    addItem(formData.get("todo") as string);
    (e.target as HTMLFormElement).reset();
    (e.target as HTMLFormElement).focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input required placeholder="Add New Todo" name="todo" />
      <button className="primary" type="submit">
        Add
      </button>
    </form>
  );
}
