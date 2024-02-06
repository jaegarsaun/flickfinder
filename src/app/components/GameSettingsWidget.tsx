import { Countries, CountriesInterface } from '../data/Countries'
export default function GameSettingsWidget() {
    return (
        <div className="max-w-[50vw] max-h-[75vh] rounded-xl bg-dark lg:h-[75vh] lg:w-[50vw] p-10">
            <h1 className="font-bold text-white text-2xl">Game Settings</h1>
            <form>
                <label className="text-white" >Country</label>
                <select>
                    {Countries.map((country: CountriesInterface) => (
                        <option key={country.name} value={country.code}>{country.name}</option>
                    ))}
                </select>
            </form>
        </div>
    )
}