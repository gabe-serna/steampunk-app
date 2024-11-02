import { Button } from "./ui/button";

const ChatPopup = () => {
  return (
    <figure
      style={{ backgroundImage: "url('/parchment.png')" }}
      className="fixed bottom-0 right-0 h-[135px] w-[360px] -translate-x-8 -translate-y-8 bg-contain bg-no-repeat"
    >
      <div className="flex w-max">
        <div className="ml-20 flex w-fit flex-col items-center">
          <figcaption className="pt-7 font-['Alegreya_SC'] text-xl font-bold text-bronze-700">
            Ask Octavius
          </figcaption>
          <Button
            size="sm"
            variant="outline"
            className="mt-2 w-max font-['Alegreya_SC']"
          >
            Chat Now
          </Button>
        </div>
        <div
          style={{ backgroundImage: "url('/octavius.webp')" }}
          className="h-[200px] w-[200px] -translate-y-20 bg-contain bg-no-repeat"
        />
      </div>
    </figure>
  );
};

export default ChatPopup;
