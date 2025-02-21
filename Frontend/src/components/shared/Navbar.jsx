import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 ">
        <div>
          <h1 className="text-2xl font-bold ">
            job<span className="text-[#f83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          <Popover>
            <PopoverTrigger>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className='w-80'>
            <div className="flex gap-4 space-y-2">
            <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
              <div>
              <h4 className="font-medium"> Official Yash</h4>
              <p className="text-sm text-muted-foreground">jsiahsi</p>
              </div>
            </div>
            <div>
                <Button variant="link">View Profile</Button>
            </div>
              </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
