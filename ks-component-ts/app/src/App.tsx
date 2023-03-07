window.global ||= window;
import "@kanda-libs/ks-component-ts/dist/library.css";
import "@kanda-libs/ks-design-library/dist/library.css";
import {
  useForm,
  Field,
  Form,
  OptionalHiddenField,
  Label,
} from "@kanda-libs/ks-component-ts";
import { useWatch } from "react-hook-form";
import { StringIndexedObject } from "~/types";
import { Icon, Text } from "@kanda-libs/ks-design-library";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFormContext } from "~/index";
import FilterableSelect from "~/field/components/FilterableSelect";

if (!(Window.prototype as StringIndexedObject).setImmediate) {
  (Window.prototype as StringIndexedObject).setImmediate = function () {
    return false;
  };
}

const capitalise = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

function App() {
  const form = useForm({
    defaultValues: {
      pct: 10,
    },
  });

  const { watch, setValue } = form;
  const pct = watch("pct");
  const options = [
    "air_conditioning",
    "alarm_systems",
    "artificial_grass",
    "bathrooms_supply_and_fitted",
    "bathrooms_supply_only",
    "boilers",
    "cctv",
    "central_heating",
    "conservatory",
    "conservatory_roof",
    "decking",
    "door_canopy",
    "doors",
    "driveways",
    "electrical_rewiring",
    "ev_chargers",
    "fencing",
    "fireplaces",
    "flooring_excuding_carpets",
    "garage_doors",
    "garden_buildings",
    "gates",
    "granite_worktops",
    "home_study",
    "hot_tubs_and_spas",
    "kitchens_fitted",
    "kitchens_supply_only",
    "landscaping",
    "loft_boarding",
    "painting_and_decorating",
    "patios",
    "plastering",
    "resin_driveways",
    "roofing_excl_flat_roofs",
    "roofline",
    "roughcast_wallcoating",
    "security_lighting",
    "staircases",
    "tiling",
    "underfloor_heating",
    "verandas",
    "wall_insulation_and_cladding",
    "windows",
    "windows_and_doors",
    "other",
  ].map((option) => ({
    value: option,
    name: capitalise(option.replace(/_/g, " ").replace("and", "&")),
  }));

  return (
    <Form
      id="app"
      form={form}
      onSubmit={(formValues) => {
        console.log(formValues);
      }}
    >
      <div className="App">
        <div className="px-8 py-4">
          <div style={{ maxWidth: "400px" }}>
            <Label label="Work Type" />
            <FilterableSelect
              name="options"
              placeholder="Enter a value"
              options={options}
            />
          </div>
        </div>
      </div>
    </Form>
  );
}

export default App;
