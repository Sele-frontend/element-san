import elCard from "../../../package/card/index";
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
        expect(document.getElementsByClassName("el-card__header").length > 0).to.be.true;
    });
});