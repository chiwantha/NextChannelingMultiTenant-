"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Combobox = React.forwardRef(({ items, onChange }, ref) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const normalizedItems = React.useMemo(
    () =>
      items.map((item) => {
        const keys = Object.keys(item);
        return {
          value: String(item[keys[0]]),
          label: String(item[keys[1]]),
        };
      }),
    [items]
  );

  const selectedItem = normalizedItems.find(
    (item) => item.value === selectedValue
  );

  const handleReset = () => {
    setSelectedValue("");
    onChange(""); // notify parent
    setOpen(false);
  };

  // Expose reset function to parent
  React.useImperativeHandle(ref, () => ({
    reset: handleReset,
  }));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-full">
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="bg-white font-normal rounded-md outline-none w-full h-[40px] px-2 py-2 flex justify-between"
          >
            {selectedItem ? selectedItem.label : "Select option..."}
            <ChevronsUpDown className="opacity-50 ml-1" />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0 shadow-md">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandEmpty>No option found</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value=""
                onSelect={handleReset}
                className="text-sm  text-red-400 font-black"
              >
                <X className="text-red-600 font-black" />
                Reset
              </CommandItem>
              {normalizedItems.map((item) => (
                <CommandItem
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  onSelect={() => {
                    setSelectedValue(item.value);
                    setOpen(false);
                    onChange(item.value);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      item.value === selectedValue ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
});

Combobox.displayName = "Combobox";
