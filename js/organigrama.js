//JavaScript

var chart = new OrgChart(document.getElementById("tree"), {
    template: 'olivia',    
    // mouseScrool: OrgChart.none,
    layout: OrgChart.mixed,
    enableSearch: false,
    nodeBinding: {
        img_0: "img",
        field_0: "name",
        field_1: "title"
    }
});

chart.load([
    { id: "1", name: "Sala General", img: "./images/icono-cun.png" },
    { id: "2", pid: "1", name: "Revisoría Fiscal", title: "QA Lead", email: "ava@domain.com", img: "https://cdn.balkan.app/shared/2.jpg" },
    { id: "3", pid: "1", name: "Presidencia", title: "Technical Director", img: "https://cdn.balkan.app/shared/anim/1.gif" },
    { id: "4", pid: "1", name: "Secretaría General", title: "Manager", email: "jay@domain.com", img: "https://cdn.balkan.app/shared/4.jpg" },
    //Retoria
    { id: "5", pid: "3", name: "Rectoría", title: ".NET Team Lead", email: "kohen@domain.com", img: "https://cdn.balkan.app/shared/8.jpg" },
    { id: "6", pid: "5", name: "Consejo Directivo", title: ".NET Team Lead", email: "kohen@domain.com", img: "https://cdn.balkan.app/shared/8.jpg" },
    { id: "7", pid: "5", name: "Consejo Académico", title: "JS Team Lead", img: "https://cdn.balkan.app/shared/9.jpg" },
    { id: "8", pid: "5", name: "Vicerrectoría Ejecutiva", title: "Programmer", img: "https://cdn.balkan.app/shared/10.jpg" },
    { id: "9", pid: "5", name: "Asesor Jurídico", title: "Programmer", img: "https://cdn.balkan.app/shared/11.jpg" },
    { id: "10", pid: "5", name: "Controller", title: "Programmer", img: "https://cdn.balkan.app/shared/12.jpg" },
    //sub controllers
    { id: "11", pid: "10", name: "especialista Auditoria en calidad académica", title: "Programmer", img: "./images/icono-cun.png" },
    { id: "12", pid: "10", name: "Especialista auditoría de gestion", title: "Programmer", img: "./images/icono-cun.png" },
    { id: "13", pid: "10", name: "Especielista auditoría de sistemas", title: "Programmer", img: "./images/icono-cun.png" },
    { id: "14", pid: "10", name: "Analista de calidad", title: "Programmer", img: "./images/icono-cun.png" },
    { id: "15", pid: "14", name: "", title: "", img: "" },
    //Vicerrectorias
    { id: "16", pid: "8", name: "Vicerrectoría de investigación, innovación y emprendimiento", title: "QA", img: "https://cdn.balkan.app/shared/6.jpg" },
    { id: "17", pid: "8", name: "Vicerrectoría de experiencia", title: "QA", img: "https://cdn.balkan.app/shared/7.jpg" },
    { id: "18", pid: "8", name: "Vicerrectoría de capital social", title: "QA", img: "https://cdn.balkan.app/shared/5.jpg" },
    { id: "19", pid: "8", name: "Vicerrectoría de servicios digitales y planeación", title: "Programmer", img: "https://cdn.balkan.app/shared/13.jpg" },
    { id: "20", pid: "8", name: "Vicerrectoría académica", title: "Marketer", img: "https://cdn.balkan.app/shared/14.jpg" },
    { id: "21", pid: "8", name: "Vicerrectoría financiera", title: "Designer", img: "https://cdn.balkan.app/shared/15.jpg" },
    { id: "22", pid: "8", name: "Dirección jurídica", title: "Sales Manager", img: "https://cdn.balkan.app/shared/16.jpg" },
    //Sub Vicerrectoría de investigación, innovación y emprendimiento
    { id: "23", pid: "16", name: "Dirección de programas", title: "Sales Manager", img: "https://cdn.balkan.app/shared/16.jpg" },
    { id: "24", pid: "16", name: "Dirección de innovación", title: "Sales Manager", img: "https://cdn.balkan.app/shared/16.jpg" },
    { id: "25", pid: "16", name: "Dirección de investigación", title: "Sales Manager", img: "https://cdn.balkan.app/shared/16.jpg" }
]);

document.getElementById("selectTemplate").addEventListener("change", function () {
    chart.config.template = this.value;
    chart.draw();
});

