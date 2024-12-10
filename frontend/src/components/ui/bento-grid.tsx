import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Tooltip from "@mui/material/Tooltip";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const BentoGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        `grid w-full auto-rows-[22rem] gap-3`,
        `grid-cols-3`,
        "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      )}>
      {children}
    </div>
  );
};

function BentoCard({
  name,
  author,
  background,
  description,
  href,
  cta,
  category,
  onClick,
}: {
  name: string;
  author: string;
  background: React.ReactNode;
  description: string;
  href: string;
  cta: string;
  category: string;
  onClick: () => void;
}) {
  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-white shadow-md dark:bg-black dark:border dark:border-neutral-800",
        "transform-gpu transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      )}>
      <div className='relative overflow-hidden flex justify-center items-center w-full h-full'>
        {background}
      </div>

      {/* Content Area */}
      <div className='pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-5'>
        <h3 className='text-xl font-semibold text-neutral-700 dark:text-neutral-300'>
          {name}
        </h3>
        <p className='text-sm text-neutral-500 dark:text-neutral-400'>
          {author} • {category}
        </p>

        {/* Tooltip and Truncation */}
        <Tooltip title={description} placement='top'>
          <p
            className='max-w-lg text-neutral-600 dark:text-neutral-400 truncate sm:max-w-full'
            style={{
              WebkitLineClamp: "3",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
            }}>
            {description}
          </p>
        </Tooltip>
      </div>

      {/* Hover CTA */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300",
          "group-hover:translate-y-0 group-hover:opacity-100"
        )}>
        <Button
          variant='ghost'
          asChild
          size='sm'
          style={{ color: "#ffce1a" }}
          className='pointer-events-auto'
          onClick={onClick}>
          <a href={href}>
            {cta}
            <ArrowRightIcon className='ml-2 h-4 w-4' />
          </a>
        </Button>
      </div>

      {/* Hover Overlay */}
      <div className='pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10' />
    </div>
  );
}

export { BentoCard, BentoGrid };
