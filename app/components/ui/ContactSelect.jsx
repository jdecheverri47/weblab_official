import { Select, SelectItem, Avatar } from "@nextui-org/react";
import countries from "@/app/data/countries";

function ContactSelect({loading}) {
  const selectOptions = countries.map((country) => {
    return (
      <SelectItem
        key={country.iso2}
        startContent={
          <Avatar
            alt={country.name}
            className="w-6 h-6"
            src={`https://flagcdn.com/${country.iso2.toLowerCase()}.svg`}
          />
        }
      >
        {`(+${country.phoneCode}) ${country.nameEN} `}
      </SelectItem>
    );
  });
  return (
    <>
      <Select
        label="Select a country"
        placeholder="Select a country"
        name="country"
        clearable
        search
        width="100%"
        variant="bordered"
        labelPlacement="outside"
        classNames={{
          label: ["font-medium lg:text-md text-[16px]"],
        }}
        size="lg"
        isDisabled={loading}
      >
        {selectOptions}
      </Select>
    </>
  );
}

export default ContactSelect;
