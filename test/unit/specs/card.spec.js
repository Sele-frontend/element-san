import elCard from "../../../package/card/index.js";
import san from "san";

describe("card structure", () => {
    const viewport = document.createElement("div");

    beforeEach(() => {
        document.body.appendChild(viewport);
    });

    afterEach(() => {
        viewport.remove();
    });

    it("It should have a header", () => {
        var myComponent = san.defineComponent({
            template:`<div>
                          <el-card header="true">
                            <div slot="header">
                                header test
                            </div>
                          </el-card>
                      </div>`,
            card:{
                'el-card':elCard
            }
        });
        let myApp = new myComponent();
        myApp.attach(viewport);
        expect(document.getElementsByTagName("el-card").length > 0).to.be.true;
    });

    It("It should have shadow when hover,and should't have shadow when mouse out", () => {
        var myComponent = san.defineComponent({
            template:`<div>
                          <el-card shadow="hover">
                          </el-card>
                      </div>`,
            card:{
                'el-card':elCard
            }
        });
        let myApp = new myComponent();
        myApp.attach(viewport);
        expect(document.getElementsByClassName("is-hover-shadow").length > 0).to.be.true;
    })
});