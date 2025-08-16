import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Volume2, Plus, Languages, Info, Menu, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { VocabularyCardProps } from "@/types/vocabulary";
import { translationBadgeClass } from "@/lib/utils";

export default function VocabularyCard({
  word,
  pronunciation,
  baseForm,
  translations = [],
  triggerButton,
}: VocabularyCardProps) {
  const [activeAction, setActiveAction] = useState<
    "languages" | "info" | "menu"
  >("languages");
  

  const [open, setOpen] = useState(false);
  const normalizedTranslations = useMemo(() => {
    if (translations.length) return translations;
    return [];
  }, [translations]);
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        {triggerButton ?? "Open"}
      </DialogTrigger>
      <DialogContent className="w-fit h-fit overflow-hidden sm:max-w-2xl mx-auto sm:p-4 space-y-2 [&>button:first-of-type]:hidden bg-transparent border-0 shadow-none">
        {/* Main vocabulary card */}
        <Card className=" sm:pl-4 bg-gray-100 rounded-2xl pb-0">
          {/* Main word with pronunciation */}
          <div className="flex items-center gap-3 mb-2 max-sm:px-2">
            <h1 className="text-4xl font-bold text-gray-800">{word}</h1>
            <Button variant="ghost" size="sm" className="p-2">
              <Volume2 className="w-5 h-5 text-gray-600" fill="" />
            </Button>
            {pronunciation ? (
              <span className="text-gray-500 text-lg">{pronunciation}</span>
            ) : null}
          </div>

          {/* Word form variation */}
          <div className="flex items-center mb-2 max-sm:px-2">
            <span className="inline-flex justify-center -mt-4 rounded-lg p-2 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-10 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path d="M3 13a8 8 0 0 0 8 8" />
              </svg>

              {/* Arrow positioned at the end of the curve */}
              <ArrowRight
                size={16}
                className="absolute right-[14px] top-[18px] text-purple-500"
              />
            </span>
            {baseForm ? (
              <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
                <span className="text-gray-800 font-bold">{baseForm}</span>
                <Button variant="ghost" size="sm" className="p-1">
                  <Plus className="w-4 h-4 text-purple-500" />
                </Button>
              </div>
            ) : null}
            <Button variant="ghost" size="sm" className="p-2">
              <Volume2 className="w-4 h-4 text-gray-600" fill="" />
            </Button>
          </div>

          {/* Translation options */}
          {normalizedTranslations.length ? (
            <div className="flex flex-wrap gap-3 sm:mb-6 max-sm:px-2">
              {normalizedTranslations.map((t, idx) => (
                <div
                  key={idx}
                  className="flex relative items-center gap-2 bg-white rounded-lg px-4 py-3"
                >
                  <div className={translationBadgeClass(t.emphasis)}></div>
                  <span className="text-gray-800 font-bold">{t.text}</span>
                  <Button variant="ghost" size="sm" className="p-1">
                    <Plus className="w-4 h-4 text-purple-500" />
                  </Button>
                </div>
              ))}
            </div>
          ) : null}

          {/* Action buttons */}
          <div className="flex justify-between sm:justify-end gap-3 bg-white w-full sm:w-fit sm:self-end rounded-tl-lg max-sm:rounded-b-lg">
            <div
              className={`relative p-2 sm:p-4 rounded-tl-lg border-t-4 ${
                activeAction == "languages"
                  ? "border-purple-500"
                  : "border-white"
              }`}
            >
              <Button
                variant="ghost"
                size="sm"
                className={`p-2 cursor-pointer ${
                  activeAction === "languages" ? "bg-purple-100" : "bg-gray-200"
                }`}
                aria-current={activeAction === "languages"}
                onClick={() => setActiveAction("languages")}
              >
                <Languages
                  className={`w-5 h-5 ${
                    activeAction === "languages"
                      ? "text-purple-600"
                      : "text-gray-600"
                  }`}
                />
              </Button>
            </div>
            <div
              className={`relative p-2 sm:p-4  border-t-4 ${
                activeAction == "info" ? "border-purple-500" : "border-white"
              }`}
            >
              <Button
                variant="ghost"
                size="sm"
                className={`p-2 cursor-pointer ${
                  activeAction === "info" ? "bg-purple-100" : "bg-gray-200"
                }`}
                aria-current={activeAction === "info"}
                onClick={() => setActiveAction("info")}
              >
                <Info
                  className={`w-5 h-5 ${
                    activeAction === "info"
                      ? "text-purple-600"
                      : "text-gray-600"
                  }`}
                />
              </Button>
            </div>
            <div
              className={`relative p-2 sm:p-4  border-t-4 ${
                activeAction == "menu" ? "border-purple-500" : "border-white"
              }`}
            >
              <Button
                variant="ghost"
                size="sm"
                className={`p-2 cursor-pointer ${
                  activeAction === "menu" ? "bg-purple-100" : "bg-gray-200"
                }`}
                aria-current={activeAction === "menu"}
                onClick={() => setActiveAction("menu")}
              >
                <Menu
                  className={`w-5 h-5 ${
                    activeAction === "menu"
                      ? "text-purple-600"
                      : "text-gray-600"
                  }`}
                />
              </Button>
            </div>
          </div>
        </Card>
      </DialogContent>
      
    </Dialog>
  );
}
