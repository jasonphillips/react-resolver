import assert from "assert";
import { Resolver } from "../dist";
import React from "react";

import PropsFixture from "./support/PropsFixture";
import PropsFixtureContainer from "./support/PropsFixtureContainer";

import PropsFixtureParent from "./support/PropsFixtureParent";
import PropsFixtureParentContainer from "./support/PropsFixtureParentContainer";
import PropsFixtureDependentParentContainer from "./support/PropsFixtureDependentParentContainer";

describe("Resolver", function() {
  describe(".renderToStaticMarkup", function() {
    context("when given a `React.Component`", function() {
      it("matches React.renderToStaticMarkup", function(done) {
        const expected = React.renderToStaticMarkup(<PropsFixture user="Eric" />);

        Resolver.renderToStaticMarkup(<PropsFixture user="Eric" />)
          .then((markup) => {
            assert.equal(markup, expected);
          }, done)
          .then(done)
          .catch(done)
        ;
      });
    });

    context("when given a <Container />", function() {
      it("matches React.renderToStaticMarkup", function(done) {
        const expected = React.renderToStaticMarkup(
          <PropsFixture user="Eric" />
        );

        const render = function() {
          return Resolver.renderToStaticMarkup(<PropsFixtureContainer />);
        };

        render()
          .then((markup) => {
            assert.equal(markup, expected);

            return render();
          })
          .then((markup) => {
            assert.equal(markup, expected);
          })
          .then(done)
          .catch(done)
        ;
      });
    });

    context("when given nested Containers", function() {
      it("matches React.renderToStaticMarkup", function(done) {
        const expected = React.renderToStaticMarkup(
          <PropsFixture user="Eric" />
        );

        const render = function() {
          return Resolver.renderToStaticMarkup(<PropsFixtureParentContainer />);
        };

        render()
          .then((markup) => {
            assert.equal(markup, expected);

            return render();
          })
          .then((markup) => {
            assert.equal(markup, expected);
          })
          .then(done)
          .catch(done)
        ;
      });
    });

    context("when given nested Containers with dependent promises", function() {
      it("matches React.renderToStaticMarkup", function(done) {
        const expected = React.renderToStaticMarkup(
          <PropsFixture user="Eric" />
        );

        const render = function() {
          return Resolver.renderToStaticMarkup(<PropsFixtureDependentParentContainer />);
        };

        render()
          .then((markup) => {
            assert.equal(markup, expected);

            return render();
          })
          .then((markup) => {
            assert.equal(markup, expected);
          })
          .then(done)
          .catch(done)
        ;
      });
    });
  });
});
