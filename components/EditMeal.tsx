import React, { useState } from "react";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const EditMeal = ({ id, data }: { id: number; data: any }) => {
  const [value, setValue] = useState(data.data);
  const [save, setSave] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    if (e.target.value != data.data) {
      setValue(e.target.value);
      setSave(true);
    }

    if (e.target.value === data.data) {
      setSave(false);
    }
  };

  const handleSave = () => {
    
  };

  return (
    <DialogContent className="sm:max-w-md gap-10 w-1/3">
      <DialogHeader>
        <DialogTitle className="font-sofiaPro font-bold text-xl">
          Edit {data.day}'s {data.meal}
        </DialogTitle>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <textarea
          id="link"
          placeholder="Enter here"
          defaultValue={data.data}
          onChange={handleChange}
          className="font-sofiaPro w-full pt-2 pl-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EE6C23] focus:border-transparent min-h-12 font-light sm:min-h-40"
        />
      </div>
      <DialogFooter className="sm:justify-between max-sm:flex-col gap-2">
        <DialogClose asChild>
          <Button
            type="submit"
            className="bg-red-500 hover:bg-red-700 font-sofiaPro"
          >
            Delete meal
          </Button>
        </DialogClose>
        <div className="flex gap-2 max-sm:justify-between">
          <DialogClose asChild>
            <Button
              disabled={!save}
              type="submit"
              className="bg-[#EE6C23] hover:bg-orange-700 font-sofiaPro w-full"
              onClick={() => {
                handleSave;
              }}
            >
              Save
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="font-sofiaPro w-full"
            >
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogFooter>
    </DialogContent>
  );
};

export default EditMeal;
