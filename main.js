class Calculator {
    constructor (previousNumberTextElement, currentNumberTextElement) {
        this.previousNumberTextElement = previousNumberTextElement;
        this.currentNumberTextElement = currentNumberTextElement
        this.clearAll()
        // this.delete()

    }
        clearAll() {
            this.currentNumber = "";
            this.previousNumber = "";
            this.operation = ""

        }
        delete() {
         this.currentNumber = this.currentNumber.toString().slice(0,-1)
        }
        
    appendNumber(number) {
        if (number === '.' && this.currentNumber.includes('.')) return  
       this.currentNumber = this.currentNumber.toString() + number.toString()
    }
    chooseOperation(operation) {
        if(this.currentNumber == "" ) return
        if (this.previousNumber !== "") {
          this.compute()
        }
            this.operation = operation
            this.previousNumber = this.currentNumber
            this.currentNumber = ''
                }
    compute() {
        let computation
        let prev = parseFloat(this.previousNumber) 
        let current = parseFloat(this.currentNumber)
        if (isNaN(prev) || isNaN(current))  return 
        switch (this.operation) {
            case "/" :
                computation = prev / current
                break
            case "*":
                computation = prev * current
                break
            case "+":
                computation = prev + current
                break
            case "-":
                computation = prev - current
                break
            default:
                break
                return
                }
                this.currentNumber = computation
                this.operation = undefined
                this.previousNumber = ""   
                }
    display() {
        this.currentNumberTextElement.innerText = this.currentNumber
        if ( this.operation!=null) {
            previousNumberTextElement.innerText =`${this.previousNumber} ${this.operation}`
        }else {
            previousNumberTextElement.innerText = ""
        }
            }
}
const numberBnt = document.querySelectorAll('[data-number]');
const equalBnt =  document.querySelector('[data-equals]');
const clearAllbnt =  document.querySelector('[data-all-clear]');
const deleteBnt =  document.querySelector('[data-delete]');
const operationBnt =  document.querySelectorAll('[data-operation]');
const previousNumberTextElement =  document.querySelector('[data-previous-number]');
const currentNumberTextElement =  document.querySelector('[data-current-number]');


const calculator = new Calculator(previousNumberTextElement, currentNumberTextElement);

numberBnt.forEach(button => {
    button.addEventListener('click', () => {
calculator.appendNumber(button.innerText)
calculator.display()
    })
});
operationBnt.forEach(button => {
    button.addEventListener('click', () => {
calculator.chooseOperation(button.innerText)
calculator.display()
    })
})
clearAllbnt.addEventListener('click', () => {
    console.log("clicked")
calculator.clearAll()
calculator.display()
    })
deleteBnt.addEventListener("click", () => {
    calculator.delete()
    calculator.display()
})
equalBnt.addEventListener("click", ()=> {
    calculator.compute()
    calculator.display()
})