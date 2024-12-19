import {Select, SelectItem, Avatar, Input, Button} from "@nextui-org/react";

export default function AddForm() {
  return (
    <div className="flex items-center justify-center h-full gap-5">
      <Select className="max-w-xs " label="Select country"
        classNames={{
          mainWrapper: "bg-transparent",
          trigger: [
            "bg-[rgba(28,28,28,0.6)]",
            "data-[hover=true]:bg-[rgba(28,28,28,0.6)]",
          ],
          value: [ 
            "text-white",
            "group-data-[has-value=true]:text-white"
          ],
          selectorIcon: "text-white"
        }}
      >
        <SelectItem
          className="text-white"
          key="argentina"
          startContent={
            <Avatar alt="Argentina" className="w-6 h-6" src="https://flagcdn.com/ar.svg" />
          }
        >
          Argentina
        </SelectItem>
        <SelectItem
          className="text-white"
          key="venezuela"
          startContent={
            <Avatar alt="Venezuela" className="w-6 h-6" src="https://flagcdn.com/ve.svg" />
          }
        >
          Venezuela
        </SelectItem>
        <SelectItem
          className="text-white"
          key="brazil"
          startContent={<Avatar alt="Brazil" className="w-6 h-6" src="https://flagcdn.com/br.svg" />}
        >
          Brazil
        </SelectItem>
        <SelectItem
          className="text-white"
          key="switzerland"
          startContent={
            <Avatar alt="Switzerland" className="w-6 h-6" src="https://flagcdn.com/ch.svg" />
          }
        >
          Switzerland
        </SelectItem>
        <SelectItem
          className="text-white"
          key="germany"
          startContent={<Avatar alt="Germany" className="w-6 h-6" src="https://flagcdn.com/de.svg" />}
        >
          Germany
        </SelectItem>
        <SelectItem
          className="text-white"
          key="spain"
          startContent={<Avatar alt="Spain" className="w-6 h-6" src="https://flagcdn.com/es.svg" />}
        >
          Spain
        </SelectItem>
        <SelectItem
          className="text-white"
          key="france"
          startContent={<Avatar alt="France" className="w-6 h-6" src="https://flagcdn.com/fr.svg" />}
        >
          France
        </SelectItem>
        <SelectItem
          className="text-white"
          key="italy"
          startContent={<Avatar alt="Italy" className="w-6 h-6" src="https://flagcdn.com/it.svg" />}
        >
          Italy
        </SelectItem>
        <SelectItem
          className="text-white"
          key="mexico"
          startContent={<Avatar alt="Mexico" className="w-6 h-6" src="https://flagcdn.com/mx.svg" />}
        >
          Mexico
        </SelectItem>
      </Select>
      <Input
      classNames={{
        label: "text-white dark:text-white/90",
        input: [
          "text-white",
          "bg-transparent",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          "group-data-[has-value=true]:text-white"
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "bg-[rgba(28,28,28,0.6)]",
          "data-[hover=true]:bg-[rgba(28,28,28,0.6)]",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-[rgba(28,28,28,0.6)]",
          "dark:hover:bg-default/70",
          "group-data-[focus=true]:bg-[rgba(28,28,28,0.6)]",
          "dark:group-data-[focus=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
      className="h-full"
      endContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">$</span>
        </div>
      }
      label="Price"
      labelPlacement="inside"
      placeholder="0.00"
      type="number"
    />
    <Button color="primary" className="h-14">Button</Button>
  </div>
  );
}
