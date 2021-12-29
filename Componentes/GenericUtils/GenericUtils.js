
export default class GenericUtils {
    
    constructor() { }

    // 
    /**
    * Retorna un objeto a través del los campos del objeto JSON
    */
    static getObjectFromJson(jsonData, classObject) {
        // foreach (var fieldInfo in fields) // JSON
        // {
        //     foreach (DataColumn dc in dt.Columns) // Propiedades de la clase Servicio
        //     {
        //         // Matching the columns with fields
        //         if (fieldInfo.Name == dc.ColumnName)
        //         {
        
        for(const item in jsonData) { // Propiedades del objeto JSON

            // console.log("json item: " + item)

            for(const T in classObject) { // Propiedades del objeto de la clase genérica
                // console.log("Servicio object property 's': " + s);

                // Si las propiedades se llaman igual...
                if(item == T) {
                    // console.log(`PRUEBAAA ${item} jsonData[item]: ${jsonData[item]}`)
                    
                    // En la posición T del objeto genérico, se setea
                    // el valor actual del objeto JSON
                    classObject[T] = jsonData[item];
                    // console.log(`PRUEBAAA ${item} jsonData[item]: ${jsonData[item]}`)
                    // console.log(`PRUEBAAA ${item} classObject[T]: ${classObject[T]}`)

                }

            }
        }

        return classObject;
    }

    /**
    * Añade un campo al formulario que se le especifique en el parámetro formId
    */
    static addFieldToForm(name, value, formId) {

       console.log('formId: ' + formId);
       
       // Si en la 1era posición del formId no está el #...
       // if(!formId.indexOf("#", 0)) {
       if(formId.charAt(0) != "#") {
           let temp = formId;
           formId = "#" + temp;
       }

       // console.log('formId: ' + formId);

       // Añade el campo estado al formulario #formCrudServicio
       // porque cuando tiene value = false, no se incluye
       // en los datos del formulario
       // Fuente: https://stackoverflow.com/questions/17809056/how-to-add-additional-fields-to-form-before-submit
       $("<input />").attr("type", "hidden")
           .attr("name", name)
           .attr("value",value)
           .appendTo(formId);
   }


}

