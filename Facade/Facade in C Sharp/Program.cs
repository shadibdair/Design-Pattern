using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FacadeExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Facade obj = new Facade();
            obj.CalculateAllIncomes();
            obj.CalculateAllDedcutions();
            obj.CalculateNeSalary();
            Console.ReadLine();
        }
    }

    public class CalculateFixedElementsTo
    {
        public void print()
        {
            Console.WriteLine("Fixed Elemnt to Employee has been calculated");
        }
    }

    public class CalculateVariableElementsTo
    {
        public void print()
        {
            Console.WriteLine("Variable Elemnt to Employee has been calculated"); 
        }
    }

    public class CalculateFixedElementsFrom
    {
        public void print()
        {
            Console.WriteLine("Fixed Elemnt From Employee has been calculated"); 
        }
    }

    public class CalculateVariableElementsFrom
    {
        public void print()
        {
            Console.WriteLine("Variable Elemnt From Employee has been calculated");
        }
    }

    public class Facade
    {
        CalculateFixedElementsFrom fixedFrom;
        CalculateVariableElementsFrom variableFrom;
        CalculateFixedElementsTo FixedTo;
        CalculateVariableElementsTo variableTo;

        public Facade()
        {
            fixedFrom = new CalculateFixedElementsFrom();
            FixedTo = new CalculateFixedElementsTo();
            variableFrom = new CalculateVariableElementsFrom();
            variableTo = new CalculateVariableElementsTo();
        }

        public void CalculateAllIncomes()
        {
            Console.WriteLine("\t\tAll Income\t\t");
            Console.WriteLine();
            FixedTo.print();
            variableTo.print();
            Console.WriteLine("-----------");
            Console.WriteLine();
        }

        public void CalculateAllDedcutions()
        {
            Console.WriteLine("\t\tAll Deductions\t\t");
            Console.WriteLine();
            fixedFrom.print();
            variableFrom.print();
            Console.WriteLine("-----------");
            Console.WriteLine();
        }

        public void CalculateNeSalary()
        {
            Console.WriteLine("\t\tNet Salary\t\t");
            Console.WriteLine();
            FixedTo.print();
            variableTo.print();
            fixedFrom.print();
            variableFrom.print();
            Console.WriteLine("-----------");
        }
    }
}
