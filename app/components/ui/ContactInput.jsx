import { Input } from "@nextui-org/react";

function ContactInput({ loading, type, id, name, placeholder, label }) {
  return (
    <div className="form_group">
      <Input
        required
        isDisabled={loading}
        classNames={{
          input: ["bg-white"],
          innerWrapper: ["bg-white"],
          inputWrapper: ["bg-white  border-1"],
          label: ["font-medium"],
        }}
        size="lg"
        variant="bordered"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        label={label}
        labelPlacement="outside"
      />
    </div>
  );
}

export default ContactInput;
