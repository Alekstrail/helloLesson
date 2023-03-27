import {multi, SplitIntoWords, sum} from "./01";

test('sum should be correct', ()=> {
    const a =1;
    const b =2;
    const c =3;

    const result1 = sum(a,b);
    const result2 = sum(a,c);
    expect(result1).toBe(3);
    expect(result2).toBe(4);
})
test('multiply should be correct', ()=> {
    const a =1;
    const b =2;
    const c =3;

    const result3 = multi(a,b);
    const result4 = multi(a,c);
    expect(result3).toBe(2);
    expect(result4).toBe(3);
})

test("spliting into words should be correct", () => {
    const sentense1 ="Hello my friends!"
    const sentense2 ="JS is programming language"

    const result5 = SplitIntoWords(sentense1);
    const result6 = SplitIntoWords(sentense2);

    expect(result5.length).toBe(3);
    expect(result5[0]).toBe("hello");
    expect(result5[1]).toBe("my");
    expect(result5[2]).toBe("friends");

    expect(result6.length).toBe(4);
    expect(result6[0]).toBe("js");
    expect(result6[1]).toBe("is");
    expect(result6[2]).toBe("programming");
    expect(result6[3]).toBe("language");



})