export default function Vote({ text, percentage = 0, votes = 0, onVoteSelect }) {
    return (
        <div className="votes">
            <input
                className="appearance-none"
                type="radio"
                name="vote"
                value={text}
                id={text}
                onChange={onVoteSelect}
                aria-label={`Vote for ${text}`}
            />
            <label
                htmlFor={text}
                className="bg-white block rounded border-4 border-transparent cursor-pointer shadow-lg p-6 transition duration-200 
                hover:border-blue-400 checked:border-blue-500 checked:bg-blue-50" // Classes for visual feedback
            >
                <p className="text-2xl font-bold flex items-center justify-between">
                    {text}
                    <span>{percentage}%</span>
                </p>
                <progress
                    className="w-full h-2 mt-4 rounded-lg [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg"
                    value={percentage}
                    max="100"
                >
                    {percentage}%
                </progress>
                <small className="text-slate-500">{votes} votes</small>
            </label>
        </div>
    );
}
