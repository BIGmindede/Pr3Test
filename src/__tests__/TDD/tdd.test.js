import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App'
import handleOnClick from '../../utilities/handleOnClick';
import * as Converter from '../../utilities/converter';
import * as UnitPicker from '../../utilities/pickUnits'

// GenerateInputFields
it('should render stubbed inputs', () => {
    render(<App/>)
    const selects = screen.getAllByRole('combobox')
    const inputs = screen.getAllByRole("spinbutton")
    const button = screen.getAllByRole("button")
    expect(selects.length).toBe(5)
    expect(inputs.length).toBe(2)
    expect(button.length).toBe(1)
})
// end of feature

// Feature of pop-up selects labels arriving if not default option selected
it('should pop up input labels if undefault values set', () => {
    const {container} = render(<App/>)
    const select0 = screen.getAllByRole('combobox')[0]
    const inputs = container.getElementsByClassName("tcolname")
    const input0 = inputs[0]
    expect(input0).toHaveClass("pop_down")
    expect(input0).not.toHaveClass("pop_up")
    fireEvent.change(select0, {target: {value: "Система СИ"}})
    expect(input0).toHaveClass("pop_up")
    expect(input0).not.toHaveClass("pop_down")
})
// end of feature

// Feature of defining units after system and parameter are selected
// unitPicker
it('should return the array of appropriate units based on supplied specific system and measurement parameters', () => {
    const picked = UnitPicker.pickUnits("Старорусская система", "длина")
    expect(picked).toEqual(["аршин", "верста"])
})

it('should determine the units of measure', async () => {
    render(<App/>)
    const system = screen.getAllByRole('combobox')[0]
    const param = screen.getAllByRole('combobox')[2]
    const unit = screen.getAllByRole('combobox')[3]
    const spy = jest.spyOn(UnitPicker, 'pickUnits');
    expect(unit.children.length).toEqual(1)
    fireEvent.change(system, {target: {value: "Старорусская система"}})
    fireEvent.change(param, {target: {value: "длина"}})
    expect(unit.children.length).toEqual(3)
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("Старорусская система",  "длина");
})
// end of feature

// converter
it('should return number type value or throw error if incorrect args supplied', async () => {
    const ret_val = Converter.converter("Система СИ", "Система СИ", "м", "м", 1)
    expect(typeof ret_val).toBe('number')
    let checker = new Promise((res, rej) => {
        Converter.converter("Система", "Система CИ", "м", "м", 1)
    })
    await expect(checker).rejects.toThrow('Invalid arguments supplied');
    checker = new Promise((res, rej) => {
        Converter.converter("Система СИ", "Система CИ", "см", "км", 1)
    })
    await expect(checker).rejects.toThrow('Invalid arguments supplied');
})
// end of feature

// handleOnClick
it('should call converter and set its return value to state', () => {
    const func = jest.fn();
    jest.spyOn(Converter, 'converter');
    handleOnClick("Система СИ", "Система СИ", "м", "м", 1, func)
    expect(Converter.converter).toHaveBeenCalled()
    expect(Converter.converter).toHaveBeenCalledWith("Система СИ", "Система СИ", "м", "м", 1)
    expect(Converter.converter).toHaveReturnedWith(1)
    expect(func).toHaveBeenCalled()
    expect(func).toHaveBeenCalledWith(1)
})
// end of feature
