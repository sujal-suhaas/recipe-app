import React from "react";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const EditMeal = ({ id, data }: { id: number; data: any }) => {
  return (
    <DialogContent className="sm:max-w-md gap-10 w-1/3">
      <DialogHeader>
        <DialogTitle className="font-sofiaPro">
          Edit {data.day}'s {data.meal}
        </DialogTitle>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <Input
          id="link"
          type="text"
          defaultValue={data.data}
          placeholder="Enter here"
          className="font-sofiaPro"
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
              type="submit"
              className="bg-[#EE6C23] hover:bg-orange-700 font-sofiaPro w-full"
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
