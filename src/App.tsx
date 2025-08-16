import "./App.css";
import { Card } from "./components/ui/card";
import VocabularyCard from "./components/ui/VocabularyCard";

function App() {
  return (
    <>
      <div className="space-y-3 flex flex-col mx-auto justify-center items-center w-1/2">
        <Card className="p-4 bg-gray-800 text-white rounded-2xl max-w-md">
          <p className="text-lg">От какой боли?</p>
        </Card>
        <Card className="p-4 bg-gray-200 text-gray-800 rounded-2xl max-w-md ml-auto">
          <div className="text-lg">
            From what
            <VocabularyCard
              word="боли"
              pronunciation="boli"
              baseForm="боль"
              translations={[
                { text: "pain", emphasis: "strong" },
                { text: "pains", emphasis: "medium" },
                { text: "aches", emphasis: "weak" },
              ]}
              triggerButton={<span className="ml-1 border-b-4 cursor-pointer border-b-green-200">pain?</span>}
            />
          </div>
        </Card>
      </div>
    </>
  );
}

export default App;
