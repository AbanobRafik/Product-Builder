import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { categories } from "../../data";
import { Categories } from "../../interfaces";

interface CategoryProps {
  selected: Categories;
  setSelected: (categ: Categories) => void;
}

const SelectCategory = ({ selected, setSelected }: CategoryProps) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
        Category
      </Listbox.Label>
      <div className="relative">
        <ListboxButton className=" dark:text-white dark:bg-slate-600 relative w-full mt-[-10px] mb-2 cursor-default rounded-md bg-white p-2 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-40"
            />
          </span>
        </ListboxButton>

        <ListboxOptions className=" dark:bg-slate-600 absolute max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {categories.map((category) => (
            <ListboxOption
              key={category.id}
              value={category}
              className={({ active, selected }) =>
                `relative cursor-default select-none py-2 pl-3 pr-9 ${
                  active
                    ? "bg-indigo-600 dark:bg-slate-500 text-white"
                    : "text-gray-900"
                } ${selected ? "font-semibold" : "font-normal"}`
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-semibold" : "font-normal"
                    }`}
                  >
                    {category.name}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  ) : null}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default SelectCategory;
