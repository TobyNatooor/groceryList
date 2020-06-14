using System;
using System.IO;
using foodapp;
using System.Collections.Generic;

public class DataSave
{
    string F;
    public DataSave(string FileName)
    {
        F = FileName;
        if (!File.Exists(FileName))
        {
            Clear();
        }
    }
    public GroceryList[] GetGroceryList()
    {
        var All = new List<GroceryList>();
        var AllLines = File.ReadAllLines(F);
        for (var i = 0; i < AllLines.Length; i += 2)
        {
            var Grocery = new GroceryList { id = new Guid(AllLines[i]), item = AllLines[i + 1] };
            All.Add(Grocery);
        }
        return All.ToArray();
    }
    public void AddItem(GroceryList g)
    {
        var a = new string[2];
        a[0] = Guid.NewGuid().ToString();
        a[1] = g.item;

        File.AppendAllLines(F, a);
    }

    void Clear()
    {
        File.WriteAllText(F, "");
    }
    public void DeleteItem(Guid id)
    {

        var all = GetGroceryList();

        Clear();

        foreach (var e in all)
        {
            if (e.id != id)
            {
                AddItem(e);

            }
        }
    }
}