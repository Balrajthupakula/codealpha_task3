function run()
{
    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let javascriptcode = document.getElementById("javascript-code").value;
    let output = document.getElementById("output");

    var code = "<html><head><style>" + csscode + "</style></head><body>" + htmlcode + "<script>" + javascriptcode + "</script></body></html>";

    output.srcdoc = code;

}